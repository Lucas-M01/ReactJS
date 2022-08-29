import { Hand, Play } from 'phosphor-react'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { differenceInSeconds } from 'date-fns'

import {
  Separator,
  CountdownContainer,
  FormContainer,
  HomeContainer,
  TaskInput,
  MinutesAmountInput,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'

interface NewCycleFormData {
  task: string
  minutesAmount: number
}

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptDate?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondPassed, setAmountSecondPassed] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  const totalSecond = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        setAmountSecondPassed(
          differenceInSeconds(new Date(), activeCycle.startDate),
        )
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle])

  function handleCreateNewCyrcle(data: NewCycleFormData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }
    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondPassed(0)

    reset()
  }

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptDate: new Date() }
        } else {
          return { ...cycle }
        }
      }),
    )

    setActiveCycleId(null)
  }

  const currentSeconds = activeCycle ? totalSecond - amountSecondPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const second = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${second}`
    }
  }, [activeCycle, minutes, second])

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCyrcle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            disabled={!!activeCycle}
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto" />
            <option value="Estudos" />
            <option value="Descansar" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            disabled={!!activeCycle}
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{second[0]}</span>
          <span>{second[1]}</span>
        </CountdownContainer>

        {activeCycle ? (
          <StopCountdownButton onClick={handleInterruptCycle} type="button">
            <Hand size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}

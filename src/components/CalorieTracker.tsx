import { useMemo } from "react"
import type { Activity } from "../types"
import { AnimatedCounter } from "../animations/animatedCounter"

type CalorieTrackerProps = {
    activities: Activity[]
}

export default function CalorieTracker({activities} : CalorieTrackerProps) {
    
    //Contadores
    const consumedCalories = useMemo(() => 
        activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0),[activities])

    const burnedCalories = useMemo(() => 
        activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0),[activities])
    
    const totalCalories = useMemo(() => 
        consumedCalories - burnedCalories, [activities])

    return (
    <>
        <h2 className="text-4xl font-black text-white text-center">Resumen de Calorías</h2>
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
            <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
            <span className="font-black text-orange-500 text-6xl"><AnimatedCounter final={consumedCalories}/></span>
            Consumidas
            </p>
            <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
            <span className="font-black text-lime-500 text-6xl"> <AnimatedCounter final={burnedCalories}/></span>
            Ejercicio
            </p>
            <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
            <span className="font-black text-white text-6xl"> <AnimatedCounter final={totalCalories}/></span>
            Total
            </p>
        </div>

    </>
  )
}

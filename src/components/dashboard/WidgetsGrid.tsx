"use client"

import React from 'react'
import { SimpleWidget } from '..'
import { useAppSelector } from '@/store'
import { IoCartOutline } from 'react-icons/io5'

export const WidgetsGrid = () => {

    const count = useAppSelector(state => state.counter.count);

    return (
        <div className="flex flex-wrap p-2 items-center justify-center">
            <SimpleWidget 
                title={`${count}`}
                label='Contador'
                subTitle='Productos agregados'
                icon={<IoCartOutline size={70} className="text-blue-600" />}
                href={'/dashboard/counter'}
            />
        </div>
    )
}

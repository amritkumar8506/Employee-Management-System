import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
    return (
        <div className='p-6 md:p-12 bg-[#1C1C1C] min-h-screen w-full'>
            <Header />
            <TaskListNumber />
            <TaskList />
        </div>
    )
}

export default EmployeeDashboard
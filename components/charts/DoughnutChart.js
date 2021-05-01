import React from 'react'
import { Doughnut } from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
    'April', 'May'],
  datasets: [
    {
      label: 'Order by category',
     
      backgroundColor: [
        '#666ADA',
        '#54D7E1',
        '#F5C138',
        '#001E77',
        '#E7E7FB'
      ],
      hoverBackgroundColor: [
        '#666ADA',
        '#54D7E1',
        '#F5C138',
        '#001E77',
        '#E7E7FB'
      ],
      data: [76, 59, 80, 81, 56]
    }
  ]
}


const DoughnutChart = () => {
  return (
    <div>
      <Doughnut
   
                data={state} 
                options={{
                    title:{
                    display:true,
                    text:'Order by category',
                    fontSize:20,
                 
               
                    },
                    legend:{
                    display:true,
                    position:'right',
                   
                    }
                }}
            />
            {/* Doughnut chartjs */}
    </div>
  )
}

export default DoughnutChart

import React from 'react'

export const AllNews = ({img,date,description}) => {
    return (
        <>
            <img src={m4} alt="" />
            <div className='bg-blue-900 pl-2 pb-4 flex flex-col gap-1'>
                <p className='text-gray-500'>24 de abril de 2005</p>
                <p className=' font-medium text-xl '>Anuncio de produccion de M4</p>
                <div className='w-11/12 max-h-24 overflow-y-auto overflow-x-hidden'>
                    <p className='text-gray-400 text-base break-words'>La M4A1 perteneciente a la familia de fusiles de asalto automáticos en versión carabina, derivados del fusil AR-15, fabricados por la empresa Colt de Estados Unidos. Es el arma principal de infantería estándar del Ejército de los Estados Unidos, y suele ser utilizada por múltiples Ejércitos y numerosas unidades policiales de élite, como los SWAT. </p>
                </div>
            </div>
        </>
    )
}

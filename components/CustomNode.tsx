'use client'

import clsx from 'clsx'
import React, { memo } from 'react'
import { Handle, Position } from 'reactflow'

const CustomNode = ({ data }) => {
  return (
    <div
      className={clsx(
        'px-4 py-2 text-center shadow-md rounded-md bg-white border-2 border-stone-400',
        data.style
      )}
    >
      <div className="flex">
        <div className="ml-2">
          <div className="text-md font-bold text-gray-500">{data.name}</div>
          <div className="text-gray-500">{data.function}</div>
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        className="w-16 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-16 !bg-teal-500"
      />
    </div>
  )
}

export default memo(CustomNode)
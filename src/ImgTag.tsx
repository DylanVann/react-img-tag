import React, { SFC } from 'react'
import { imgTagString, ImgTagProps } from './imgTagString'

export const ImgTag: SFC<ImgTagProps> = props => (
    <span
        dangerouslySetInnerHTML={{
            __html: imgTagString(props),
        }}
    />
)

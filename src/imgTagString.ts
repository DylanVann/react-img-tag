export interface ImgTagProps {
    class?: string
    className?: string
    src?: string
    srcSet?: string
    sizes?: string
    title?: string
    alt?: string
    width?: number
    height?: number
}

export const imgTagString = (props: ImgTagProps = {}): string => {
    const classOrClassName = props.className || props.class
    const classString = classOrClassName ? ` class="${classOrClassName}"` : ``
    const src = props.src ? `src="${props.src}" ` : `src="" ` // required attribute
    const srcSet = props.srcSet ? `srcset="${props.srcSet}" ` : ``
    const sizes = props.sizes ? `sizes="${props.sizes}" ` : ``
    const title = props.title ? `title="${props.title}" ` : ``
    const alt = props.alt ? `alt="${props.alt}" ` : `alt="" ` // required attribute
    const width = props.width ? `width="${props.width}" ` : ``
    const height = props.height ? `height="${props.height}" ` : ``

    return `<img ${width}${height}${src}${srcSet}${alt}${title}${sizes}${classString}/>`
}

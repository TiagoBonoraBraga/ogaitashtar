    export default function CustomIframe({width, height, src, title, frameborder, allow, ...props}) {
    return (
        <>
            <iframe
                width={width}
                height={height}
                src={src}
                title={title}
                frameborder={frameborder}
                allow={allow}
                props={props}
                >
            </iframe>
        </>
    )
}
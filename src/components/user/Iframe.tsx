type IframeProps = {
    iframe: string
};

const Iframe = ({ iframe }: IframeProps) => {
    return (
        <div className="h-full" dangerouslySetInnerHTML={ {__html: iframe || "" } } />
    )
}

export default Iframe;
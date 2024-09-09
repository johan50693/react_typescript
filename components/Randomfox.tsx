
type Props = {
    img: string
}

export const Randomfox = ({img}:Props): JSX.Element => {

    return (
        <img width={200} height="auto" src={img} className='rounded-full'  />
    )
}

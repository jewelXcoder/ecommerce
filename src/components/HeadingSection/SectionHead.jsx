
const SectionHead = ({children}) => {
  return (
      <div className='flex items-center'>
          <div className='h-[40px] w-[20px] bg-primary rounded'></div>
          <p className='font-primary font-semibold text-primary ml-4'>{children}</p>
        </div>
  )
}

export default SectionHead

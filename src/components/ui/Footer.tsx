
const Footer = () => {
  return (
    <>
    <div className='bg-background/80 backdrop-blur-lg border-b border-border/20  bg-gradient-to-r sticky min-h-10 bottom-0 border-t border-t-gray-600   '>
         <p className="text-sm text-muted-foreground sm:text-lg break-words max-w-[80vw] flex justify-center pt-1 mx-auto " >
       © {new Date().getFullYear()} Maaz Haroon. All rights reserved. | MERN Stack Developer
        </p>
        </div>
    </>
  )
}


export default Footer

import { motion } from 'framer-motion'

const line = "Hello, I'm a full-stack Web developer"
const sentence = {
    before: { 
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }
     },
    after: {
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }
    }
}

const letter = {
    before: { 
        opacity: 0, 
        y: 50,
        transition: {
            type: 'spring',
            damping: 12,
            stiffness: 200
        }
    },
    after: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            damping: 12,
            stiffness: 200,
          },
    }
}

const CodeWriting = () => (
<motion.h1
className="message"
variants={sentence}
initial="before"
animate="after">
    {line.split("").map((char,index) => {
        return (
            <motion.span key={char + "-" + index} variants={letter}>
                {char}
            </motion.span>
        )
    })}

</motion.h1>
)

export default CodeWriting
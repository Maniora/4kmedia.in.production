// import { useEffect, useRef } from 'react'

// // Props: variant = 'up' | 'left' | 'right' | 'scale'
// // delay in ms
// const Reveal = ({ children, as: Tag = 'div', className = '', threshold = 0.15, variant = 'up', delay = 0, ...rest }) => {
//   const ref = useRef(null)

//   useEffect(() => {
//     const el = ref.current
//     if (!el) return
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             el.classList.add('reveal-visible')
//             observer.unobserve(el)
//           }
//         })
//       },
//       { threshold }
//     )
//     observer.observe(el)
//     return () => observer.disconnect()
//   }, [threshold])

//   const variantClass = {
//     up: 'reveal',
//     left: 'reveal-left',
//     right: 'reveal-right',
//     scale: 'reveal-scale',
//   }[variant] || 'reveal'

//   return (
//     <Tag ref={ref} className={`${variantClass} ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
//       {children}
//     </Tag>
//   )
// }

// export default Reveal




// components/Reveal.jsx
import { useEffect, useRef } from 'react';
import { useInView, motion } from 'framer-motion';

const Reveal = ({ children, as = 'div', className = '', ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  const Component = as;
  
  return (
    <Component ref={ref} className={className} {...props}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </Component>
  );
};

export default Reveal;
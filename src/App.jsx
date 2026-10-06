import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  AtSign,
  Camera,
  Clapperboard,
  Film,
  Mail,
  Menu,
  Play,
  Sparkles,
  Star,
  X,
} from 'lucide-react'

const navItems = ['Home', 'Work', 'Services', 'Contact']

const categories = ['Cinematic', 'Reels', 'Shorts', 'YouTube', 'Color Grading']

const projects = [
  {
    title: 'Midnight Run',
    category: 'Cinematic',
    image:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80',
    accent: 'Travel / Brand Film',
  },
  {
    title: 'Velocity Cut',
    category: 'Reels',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    accent: 'Social Growth',
  },
  {
    title: 'Afterglow',
    category: 'Shorts',
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    accent: 'Narrative Edit',
  },
  {
    title: 'Night Shift',
    category: 'YouTube',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    accent: 'Creator Studio',
  },
  {
    title: 'Monochrome Mood',
    category: 'Color Grading',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    accent: 'Grade / Finish',
  },
  {
    title: 'Signal Wave',
    category: 'Reels',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
    accent: 'Campaign Cut',
  },
]

const services = [
  {
    title: '',
    description: 'Elevated edits tailored for motion-first audiences and premium brand presence.',
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    icon: Film,
    embed:
      '<iframe width="341" height="606" src="https://www.youtube.com/embed/U6-jLqyO-Rk" title="𝑺𝑶𝑴𝑬 𝑷𝑳𝑨𝑪𝑬𝑺 𝑫𝑶𝑵’𝑻 𝑨𝑺𝑲 𝑭𝑶𝑹 𝑾𝑶𝑹𝑫𝑺,𝑻𝑯𝑬𝒀 𝑯𝑬𝑨𝑙 𝒀𝑶𝑼 𝑰𝑵 𝑺𝑰𝑳𝑬𝐮mp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
  {
    title: '',
    description: 'Fast, punchy stories built to stop the scroll and turn attention into action.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    icon: Play,
    embed:
      '<iframe width="341" height="606" src="https://www.youtube.com/embed/hU-8k_KO2Bg" title="𝑺𝑶𝑴𝑬 𝑷𝑳𝑨𝑪𝑬𝑺 𝑫𝑶𝑵’𝑻 𝑨𝑺𝑲 𝑭𝑶𝑹 𝑾𝑶𝑹𝑫𝑺,𝑻𝑯𝑬𝒀 𝑯𝑬𝑨𝑳 𝒀𝑶𝑼 𝑰𝑵 𝑺𝑰𝑳𝑬𝐮mp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
  {
    title: '',
    description: 'Story-driven edits with mood, rhythm, and a premium look designed to feel expensive.',
    image:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80',
    icon: Clapperboard,
    embed:
      '<iframe width="341" height="606" src="https://www.youtube.com/embed/eKPd75sg-Ck" title="IMG 9407" title="𝑺𝑶𝑴𝑬 𝑷𝑳𝑨𝑪𝑬𝑺 𝑫𝑶𝑵’𝑻 𝑨𝑺𝑲 𝑭𝑶𝑹 𝑾𝑶𝑹𝑫𝑺,𝑻𝑯𝑬𝒀 𝑯𝑬𝑨𝑳 𝒀𝑶𝑼 𝑰𝑵 𝑺𝑰𝑳𝑬𝐮mp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
  {
    title: '',
    description: 'Rich tonal control and cinematic polish that make every cut feel intentional.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    icon: Camera,
    embed:
      '<iframe width="341" height="606" src="https://www.youtube.com/embed/KmhdPMsZZOI" title="𝑺𝑶𝑴𝑬 𝑷𝑳𝑨𝑪𝑬𝑺 𝑫𝑶𝑵’𝑻 𝑨𝑺𝑲 𝑭𝑶𝑹 𝑾𝑶𝑹𝑫𝑺,𝑻𝑯𝑬𝒀 𝑯𝑬𝑨𝑳 𝒀𝑶𝑼 𝑰𝑵 𝑺𝑰𝑳𝑬𝐮mp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
  {
    title: '',
    description: 'Animated elements and transitions that add tempo, clarity, and high-end polish.',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
    icon: Sparkles,
    embed:
      '<iframe width="341" height="606" src="https://www.youtube.com/embed/OcBbU24GMxc" title="𝑺𝑶𝑴𝑬 𝑷𝑳𝑨𝑪𝑬𝑺 𝑫𝑶𝑵’𝑻 𝑨𝑺𝑲 𝑭𝑶𝑹 𝑾𝑶𝑹𝑫𝑺,𝑻𝑯𝑬𝒀 𝑯𝑬𝑨𝑳 𝒀𝑶𝑼 𝑰𝑵 𝑺𝑰𝑳𝑬𝐮mp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
  {
    title: '',
    description: 'Scroll-stopping cover visuals built for clicks, retention, and stronger audience pull.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    icon: AtSign,
    embed:
      '<iframe width="341" height="606" src="https://www.youtube.com/embed/m197wddbPOk" title="𝑺𝑶𝑴𝑬 𝑷𝑳𝑨𝑪𝑬𝑺 𝑫𝑶𝑵’𝑻 𝑨𝑺𝑲 𝑭𝑶𝑹 𝑾𝑶𝑹𝑫𝑺,𝑻𝑯𝑬𝒀 𝑯𝑬𝑨𝑳 𝒀𝑶𝑼 𝑰𝑵 𝑺𝑰𝑳𝑬𝐮mp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
]

const process = ['Discover', 'Edit', 'Refine', 'Deliver']

const testimonials = [
  {
    quote:
      'PRNX Studio transformed our raw footage into a premium visual story that actually moved the needle for our brand.',
    name: 'Maya Brooks',
    role: 'Brand Director',
  },
  {
    quote:
      'Their pacing, color, and cinematic finish made every frame feel expensive. The quality felt like a full creative team behind us.',
    name: 'Noah Hart',
    role: 'Founder, Northlane',
  },
  {
    quote:
      'We needed reels that looked polished and punchy. They delivered a sharp, high-converting edit system that our audience instantly noticed.',
    name: 'Aria Chen',
    role: 'Marketing Lead',
  },
]

const socialLinks = [
  { href: 'https://instagram.com/prnxstudio', label: '@prnxstudio', icon: Camera },
  { href: 'https://youtube.com/@prnxstudio', label: '@prnxstudio', icon: Clapperboard },
  { href: 'https://dribbble.com/prnxstudio', label: '@prnxstudio', icon: AtSign },
]

function MagneticButton({ children, href, className = '', variant = 'primary' }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 16
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 16
    setOffset({ x, y })
  }

  return (
    <motion.a
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      whileHover={{ scale: 1.02 }}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className={`group inline-flex items-center justify-center gap-2 rounded-full border text-sm font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
        variant === 'primary'
          ? 'border-white/20 bg-white text-black hover:border-white/40 hover:bg-[#f4f4f4]'
          : 'border-white/15 bg-white/5 text-white hover:border-white/35 hover:bg-white/10'
      } ${className}`}
    >
      {children}
    </motion.a>
  )
}

function getEmbedUrl(embedValue) {
  if (!embedValue || typeof embedValue !== 'string') return null

  const trimmedValue = embedValue.trim()

  if (trimmedValue.startsWith('<iframe')) {
    const match = trimmedValue.match(/src=["']([^"']+)["']/i)
    return match ? match[1] : null
  }

  if (trimmedValue.includes('youtube.com/embed/')) {
    return trimmedValue
  }

  const watchMatch = trimmedValue.match(/[?&]v=([A-Za-z0-9_-]{11})/)
  if (watchMatch) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`
  }

  const shortLinkMatch = trimmedValue.match(/youtu\.be\/([A-Za-z0-9_-]{11})/)
  if (shortLinkMatch) {
    return `https://www.youtube.com/embed/${shortLinkMatch[1]}`
  }

  return trimmedValue
}

function App() {
  const [activeCategory, setActiveCategory] = useState('Cinematic')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="min-h-screen bg-[#090909] text-white selection:bg-white/20 selection:text-white">
      <div className="noise-overlay" aria-hidden="true" />
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 opacity-80"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_32%),radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent_42%),linear-gradient(180deg,#090909_0%,#0b0b0b_60%,#090909_100%)]" />
      </motion.div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#090909]/80 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl' : 'bg-transparent'}`}>
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3 text-sm font-medium tracking-[0.35em] text-white/90 uppercase">
            <img src="/download.png" alt="PRNX Studio logo" className="h-16 w-auto object-contain" />
          </a>

          <div className="hidden items-center gap-8 text-[11px] font-medium tracking-[0.26em] uppercase text-white/65 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <MagneticButton href="#contact" className="px-5 py-2.5" variant="secondary">
              Start a Project
            </MagneticButton>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10 bg-[#090909]/95 md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-sm tracking-[0.24em] uppercase text-white/80">
                {navItems.map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="py-1">
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10">
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-90">
            <video
              className="h-full w-full object-cover"
              src="/bg.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_32%),linear-gradient(180deg,rgba(9,9,9,0.25),rgba(9,9,9,0.8),rgba(9,9,9,0.95))]" />
          </div>

          <div className="mx-auto flex min-h-[100vh] max-w-7xl items-center px-4 pb-16 pt-12 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full"
            >
              {/* <div className="absolute -left-4 top-0 hidden text-[8vw] font-black tracking-[-0.08em] text-white/5 md:block">
                PRNX STUDIO
              </div> */}

              <div className="max-w-5xl pt-6 md:pt-10">
                <h1 className="-mt-4 text-5xl font-black uppercase leading-[0.75] tracking-[-0.08em] text-white sm:text-6xl lg:text-[8rem]">
                  {['WE', 'EDIT.', 'YOU', 'STAND', 'OUT.'].map((word, index) => (
                    <motion.span
                      key={word}
                      initial={{ opacity: 0, y: 70 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.12, ease: 'easeOut' }}
                      className="mb-2 block"
                    >
                      {word}
                    </motion.span>
                  ))}
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75, duration: 0.8 }}
                  className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg"
                >
                  We craft cinematic edits, high-retention reels, and bold visual narratives for brands, creators, and ambitious businesses ready to dominate attention.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="mt-10 flex flex-col gap-4 sm:flex-row"
                >
                  <MagneticButton href="#work" className="px-7 py-3.5">
                    View My Work <ArrowRight size={18} />
                  </MagneticButton>
                  <MagneticButton href="#contact" variant="secondary" className="px-7 py-3.5">
                    Start a Project
                  </MagneticButton>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mt-12 flex flex-wrap items-center gap-5 text-[11px] font-medium uppercase tracking-[0.28em] text-white/45"
              >
                <span>Brand Films</span>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span>Commercials</span>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span>Short Form</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <motion.section
          id="services"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mb-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-white/55">Services</p>
            <h3 className="mt-3 text-4xl font-black uppercase leading-[0.95] tracking-[-0.07em] text-white sm:text-5xl">
              Crafted for impact
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon
              const embedUrl = getEmbedUrl(service.embed)

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d0d] transition hover:border-white/20"
                >
                  <div className="relative h-[430px] overflow-hidden border-b border-white/10 sm:h-[500px]">
                    {embedUrl ? (
                      <iframe
                        src={embedUrl}
                        title={`${service.title} preview`}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="relative z-10 h-full w-full border-0 bg-[#000]"
                      />
                    ) : (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    )}

                    <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/15 to-transparent" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        <motion.section
          id="process"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mb-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-white/55">Process</p>
            <h3 className="mt-3 text-4xl font-black uppercase leading-[0.95] tracking-[-0.07em] text-white sm:text-5xl">
              Built to move fast
            </h3>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 md:gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[260px] flex-1 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:min-w-[300px]"
              >
                <div className="mb-8 text-[11px] font-medium uppercase tracking-[0.36em] text-white/45">0{index + 1}</div>
                <h4 className="text-3xl font-black tracking-[-0.06em] text-white">{step}</h4>
                <div className="mt-6 h-px w-full bg-white/10" />
                <p className="mt-6 max-w-[210px] text-sm leading-6 text-white/60">
                  {index === 0 && 'Strategy, creative direction, and a clear visual outcome.'}
                  {index === 1 && 'Cinematic assembly, pacing, and cut decisions that hold attention.'}
                  {index === 2 && 'Polish, color, sound, and motion refinement for premium finish.'}
                  {index === 3 && 'Final delivery optimized for every platform, format, and audience.'}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="testimonials"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-white/55">Testimonials</p>
              <h3 className="mt-3 text-4xl font-black uppercase leading-[0.95] tracking-[-0.07em] text-white sm:text-5xl">
                What clients say
              </h3>
            </div>
            <div className="hidden items-center gap-2 md:flex">
              {[0, 1, 2].map((dot) => (
                <button
                  key={dot}
                  type="button"
                  aria-label={`Set testimonial ${dot + 1}`}
                  onClick={() => setActiveTestimonial(dot)}
                  className={`h-2.5 rounded-full transition ${
                    activeTestimonial === dot ? 'w-9 bg-white' : 'w-2.5 bg-white/25'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[activeTestimonial].name}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45 }}
                className="space-y-6"
              >
                <div className="flex gap-1 text-[#f4f4f4]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="max-w-4xl text-2xl font-medium leading-relaxed tracking-[-0.04em] text-white sm:text-3xl lg:text-4xl">
                  “{testimonials[activeTestimonial].quote}”
                </p>

                <div className="flex items-center gap-4 pt-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-bold text-white">
                    {testimonials[activeTestimonial].name.split(' ').map((word) => word[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white">{testimonials[activeTestimonial].name}</div>
                    <div className="text-xs uppercase tracking-[0.24em] text-white/50">{testimonials[activeTestimonial].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 lg:px-8"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-white/55">Contact</p>
              <h3 className="mt-3 text-4xl font-black uppercase leading-[0.9] tracking-[-0.08em] text-white sm:text-5xl lg:text-7xl">
                Have a project in mind?
              </h3>
            </div>

            <div className="flex flex-wrap justify-start gap-4 lg:justify-end">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.28em] text-white/80 transition hover:border-white/25 hover:bg-white/8"
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 rounded-[32px] border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr]">
            <form className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="space-y-2 text-[11px] font-medium uppercase tracking-[0.28em] text-white/55">
                  Name
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm tracking-[0.08em] text-white placeholder:text-white/30 focus:border-white/25 focus:outline-none"
                  />
                </label>

                <label className="space-y-2 text-[11px] font-medium uppercase tracking-[0.28em] text-white/55">
                  Email
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm tracking-[0.08em] text-white placeholder:text-white/30 focus:border-white/25 focus:outline-none"
                  />
                </label>
              </div>

              <label className="space-y-2 text-[11px] font-medium uppercase tracking-[0.28em] text-white/55">
                Project Type
                <select className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm tracking-[0.08em] text-white focus:border-white/25 focus:outline-none">
                  <option className="bg-[#080808]">Brand film</option>
                  <option className="bg-[#080808]">Reels & shorts</option>
                  <option className="bg-[#080808]">YouTube editing</option>
                  <option className="bg-[#080808]">Color grading</option>
                </select>
              </label>

              <label className="space-y-2 text-[11px] font-medium uppercase tracking-[0.28em] text-white/55">
                Message
                <textarea
                  rows="5"
                  placeholder="Tell us about your vision..."
                  className="w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm tracking-[0.08em] text-white placeholder:text-white/30 focus:border-white/25 focus:outline-none"
                />
              </label>

              <div className="pt-2">
                <MagneticButton href="mailto:hello@prnxstudio.com" className="px-7 py-3.5">
                  Send Inquiry <Mail size={18} />
                </MagneticButton>
              </div>
            </form>

            <div className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-[#111111] p-6">
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/55">Studio</div>
                <div className="mt-6 space-y-4 text-sm text-white/75">
                  <p>hello@prnxstudio.com</p>
                  <p>@prnxstudio on Instagram</p>
                  <p>@prnxstudio on YouTube</p>
                  <p>@prnxstudio on Dribbble</p>
                  <p>Based worldwide</p>
                  <p>Available for selected projects</p>
                </div>
              </div>

              <div className="mt-8 rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
                <div className="text-[10px] uppercase tracking-[0.32em] text-white/45">Booking</div>
                <div className="mt-3 text-2xl font-black tracking-[-0.06em] text-white">2-4 weeks</div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="mx-auto flex max-w-7xl items-center justify-between border-t border-white/10 px-4 py-8 text-[10px] uppercase tracking-[0.26em] text-white/45 sm:px-6 lg:px-8">
        <div>© 2026 PRNX Studio</div>
        <div>We Edit. You Stand Out.</div>
      </footer>
    </div>
  )
}

export default App

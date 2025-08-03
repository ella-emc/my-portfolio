import socials from "../data/socials.json";

const ContactMeSection = () => {
  return (
    <section>
      <h2 id="contact-me" className='font-space-grotesk text-primary text-center text-base lg:text-2xl mb-8 lg:mb-16'>Get in Touch</h2>
    
      <div className="flex flex-row justify-center flex-wrap gap-x-6 gap-y-3">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
          >
            <img src={social.icon_link} className="grayscale opacity-40 h-8 hover:grayscale-0 hover:opacity-100 transition duration-500 transform" />
          </a>
        ))}
      </div>
    </section>
  )
}

export default ContactMeSection
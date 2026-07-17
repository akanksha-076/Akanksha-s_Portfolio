function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <p className="eyebrow thread" style={{ justifyContent: 'center' }}>Let's Connect</p>
        <h2 className="sec-title thread">Get In Touch</h2>
        <p className="contact-desc thread">
          Open to internship opportunities, project collaborations, and connecting with fellow developers.
          Feel free to reach out.
        </p>
        <div className="contact-actions thread">
          <a href="mailto:akankshakumari90816@gmail.com" className="btn btn-primary">Email Me</a>
          <a href="https://www.linkedin.com/in/akanksha-kumarihere" target="_blank" rel="noopener noreferrer" className="btn btn-outline">LinkedIn</a>
          <a href="https://github.com/akanksha-076" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
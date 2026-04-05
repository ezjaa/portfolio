const Contact = () => {
  const contacts = [
    { name: "Whatsapp", href: "https://wa.me/+6283879179056/" },
    { name: "Linkedin", href: "https://linkedin.com/in/ezjaa" },
    { name: "Instagram", href: "https://instagram.com/ezjaa__" },
    { name: "Telegram", href: "https://t.me/eezja" },
  ];
  return (
    <section id="contact" className="w-full py-8 my-8 border-y-2 border-gray-300">
      <h2 className="text-lg font-bold md:text-center">Contact Me</h2>
      <p className="text-sm text-gray-700 mt-4 md:w-[35rem] md:text-center mx-auto block">
        Hubungi saya jika ada sesuatu yang ingin di sampaikan, menjalin kerja
        sama atau berkolaborasi. Saya juga menerima jasa pembuatan website
        sesuai kebutuhan anda.
      </p>
      <div className="w-[30rem] max-w-full mx-auto mt-4 md:text-center flex justify-center items-center flex-wrap gap-2">
        {contacts.map((item, index) => {
          return (
            <a
              href={item.href}
              target="_blank"
              key={index}
              className="bg-gray-100 border-gray-300 rounded-md shadow-xs shadow-gray-300 font-bold px-2 py-1 border text-medium text-gray-700 text-xs"
            >
              {item.name}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;

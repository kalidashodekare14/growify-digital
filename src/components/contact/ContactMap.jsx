const ContactMap = () => {
    return (
        <section className="py-16">
            <div className="2xl:w-350 xl:w-310 lg:w-260 w-full m-auto py-10 px-5">

                <h2 className="text-3xl font-bold mb-4">
                    Our Office Location
                </h2>

                <p className="text-gray-600 mb-8">
                    Visit us or find us on the map below.
                </p>

                {/* Google Map */}
                <div className="w-full h-100 rounded-2xl overflow-hidden shadow">
                    <iframe
                        src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
                        className="w-full h-full border-0"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default ContactMap
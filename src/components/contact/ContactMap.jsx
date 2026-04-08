import SectionHeadLine from '.././shared/SectionHeadLine'
const ContactMap = () => {
    return (
        <section className="py-16">
            <div className="2xl:w-350 xl:w-310 lg:w-260 w-full m-auto py-10 px-5">
                <SectionHeadLine title={"Our Office Location"} description={"Visit us or find us on the map below."} />

                {/* Google Map */}
                <div className="w-full h-100 rounded-2xl overflow-hidden shadow mt-10">
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
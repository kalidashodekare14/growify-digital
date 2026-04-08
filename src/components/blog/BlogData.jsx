import { Link } from "react-router"
import blogData from "../../data/blog.json"
import Button from "../shared/Button"
import SectionHeadLine from "../shared/SectionHeadLine"

const BlogData = () => {
    return (
        <div className="py-16 bg-gray-50">
            <div className="2xl:w-350 xl:w-310 lg:w-260 w-full m-auto px-5 lg:px-0">
                <SectionHeadLine
                    title={"Our Blog"}
                    description={"Insights, tips, and guides to grow your business online"}
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {blogData.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                                />
                            </div>
                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-2xl font-semibold mb-2 line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 text-[16px] mb-4 leading-8">
                                    {post.description}
                                </p>

                                <Link to={post.link}>
                                    <Button name={"Read More"} isIcon={true} />
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default BlogData
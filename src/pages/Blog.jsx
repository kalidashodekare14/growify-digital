import BlogData from "../components/blog/BlogData";
import SectionHeader from "../components/shared/SectionHeader/SectionHeader";

const Blog = () => {
    return (
        <div>
            <SectionHeader title={"Blog"} />
            <BlogData />
        </div>
    );
};

export default Blog;
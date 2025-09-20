// 
// numbers=[1,2,3,4,5]

// numbers.map((num)=>(html))

function Home() {

    const posts = [{
        id: 1,
        title: "Getting Started with React and Tailwind CSS",
        author: "Kavya Sri",
        timeRead:" 5 min read",
        postedOn:"2hours ago",
        content: "React and Tailwind CSS are a powerful combination for building modern web applications. In this article, we'll explore how to set up a React project with Tailwind CSS and create a simple responsive layout.",
        Image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 2,
        title: "Mindful Living in a Digital Age",
        author: "Sampath",
        timeRead:" 6 min read",
        postedOn: "1day ago",
        content: "JavaScript closures are a fundamental concept that every developer should understand. In this article, we'll dive deep into closures, how they work, and practical examples of their usage.",
        Image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 3,
        title: "Building Scalable Node.js Applications",
        author: "Emily Rodriguez",
        timeRead:" 6 min read",
        postedOn: "Nov 20, 2023",
        content: "Responsive web design is essential in today's mobile-first world. This guide will walk you through the principles of responsive design and how to implement them using CSS and modern frameworks.",
        Image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 4,
        title: "Building Scalable Node.js Applications",
        author: "David Kim",
        timeRead:" 12 min read",
        postedOn: "2 days ago",
        content: "ES2021 introduces several new features that enhance the JavaScript language. In this article, we'll explore these features and how they can improve your code.",
        Image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 5,
        title: "Design Systems: A Complete Guide",
        author: "Lisa Park",
        timeRead:" 10 min read",
        postedOn: "3days ago",
        content: "Flexbox is a powerful layout module in CSS that allows for flexible and responsive design. This article will guide you through the basics of Flexbox and how to use it effectively in your projects.",
        Image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 6,
        title: "Introduction to Machine Learning",
        author:"Alex Thompson",
        timeRead:" 15 min read",
        postedOn: "4 days ago",
        content: "TypeScript is a superset of JavaScript that adds static typing and other features to enhance developer productivity. This introduction will cover the basics of TypeScript and how to get started.",
        Image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=200&fit=crop",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }]

    return (
        <div className="min-h-screen flex flex-col items-center pt-5 bg-gray-50">
            <p className="text-4xl font-bold">Welcome back, Dev Astra</p>
            <p className="text-lg text-gray-500 mt-4"> Discover amazing stories, insights, and ideas from our community of writers.</p>
            <div className=" flex gap-10 justify-around mt-5 ">
                <button className="px-10 py-4 cursor-pointer bg-blue-700 hover:bg-blue-900 shadow-md text-white rounded-md">Write a New Post</button>
                <button className="px-10 py-4 cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md" >View My Posts</button>
            </div>
            <div className="mt-5 flex gap-10 flex-wrap justify-center w-full rounded-lg shadow-lg pb-5">
                {
                    posts.map((post) => (
                        <div className="w-96 bg-white shadow-lg rounded-lg" key={post.id}>
                            <div className="relative">
                                <img className=" rounded-t-lg  shadow-lg h-52 w-96 " src={post.Image} alt="Writing" />
                                <button className="p-3 text-sm bg-white rounded-full absolute cursor-pointer right-4 top-3">Save</button>
                            </div>
                            <div className="flex gap-5 mt-3 px-2">
                                <img className="rounded-full shadow-lg h-12 w-12 " src={post.profilePic} alt="Writing" />
                                <div>
                                    <p className="font-semibold">{post.author}</p>
                                    <p className="text-gray-500">{post.postedOn} - {post.timeRead}</p>
                                </div>
                            </div>
                            <div className="mt-3 px-3 flex flex-col gap-3">
                                <p className="text-2xl font-bold ">{post.title}</p>
                                <p className="text-gray-600">
                                    {post.content}
                                </p>
                            </div>
                            <div className="mt-3 mb-3  px-3 flex justify-end">
                                <button className="text-blue-500 hover:underline cursor-pointer">Read more</button>
                            </div>
                        </div>))
                }

            </div>
        </div>
    )
}

export default Home;
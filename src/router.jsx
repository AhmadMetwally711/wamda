import Layout from "./layouts/Layout";
import Home from "./routes/Home";
import About from "./routes/About";
import Blog from "./routes/Blog";
import Privacy from "./routes/Privacy";
import Terms from "./routes/Terms";
import PostDetails from "./routes/PostDetails";
import { createBrowserRouter } from "react-router-dom";
import PostDetailsLayout from "./layouts/PostDetailsLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "about", element: <About /> },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:slug",
        element: <PostDetailsLayout />,
        children: [{ index: true, element: <PostDetails /> }],
      },
      { path: "privacy", element: <Privacy /> },
      { path: "terms", element: <Terms /> },
    ],
  },
]);

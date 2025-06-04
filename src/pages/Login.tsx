const Login = () => {
  return (
    <div className="max-w-md mx-auto mt-20 p-8 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
      <form action="/login" method="POST" className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
                       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
                       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-center text-gray-600">
        Don't have an account?{' '}
        <a href="/register" className="text-blue-600 hover:underline">
          Sign up here
        </a>
      </p>
    </div>
  )
}

export default Login

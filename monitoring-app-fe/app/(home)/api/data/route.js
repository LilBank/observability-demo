export const dynamic = "force-dynamic";

export const GET = async () => {
  const MESSAGING_ENDPOINT = `http://${process.env.MESSAGING_API_BASE_URL}:${process.env.MESSAGING_API_PORT}/api/message`;

  try {
    const response = await fetch(MESSAGING_ENDPOINT, {
      headers: {
        'Content-Type': 'application/json'
      },
      cache: "no-store"
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return Response.json(result.message)
  } catch (error) {
    console.log(error)
    return Response.json({ message: error.message }, { status: 500 })
  }
}

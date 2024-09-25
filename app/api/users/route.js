const GET = async () => {
    const data = [
        { label: 'Option 1' },
        { label: 'Option 2' },
        { label: 'Option 3' },
        { label: 'Option 4' },
        { label: 'Option 5' },
    ];
    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
    });
};

const POST = async () => {
    return new Response(JSON.stringify({ message: "this is the POST METHOD" }), {
        headers: { 'Content-Type': 'application/json' }
    });
};

export { GET, POST };

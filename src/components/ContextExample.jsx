const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
toast.promise(
    resolveAfter3Sec,
    {
      pending: 'Promise is pending',
      success: 'Promise resolved 👌',
      error: 'Promise rejected 🤯'
    }
)

const functionThatReturnPromise = () => new Promise(resolve => setTimeout(resolve, 3000));
toast.promise(
    functionThatReturnPromise,
    {
      pending: 'Promise is pending',
      success: 'Promise resolved 👌',
      error: 'Promise rejected 🤯'
    }
)
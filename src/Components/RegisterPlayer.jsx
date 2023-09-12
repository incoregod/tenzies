const RegisterPlayer = ({ playerName, registerFunc, handleChange }) => {
  return (
    <div className="flex items-center justify-center gap-1 ">
      <input
        className="p-2 rounded-lg border-none focus:outline-none"
        type="text"
        placeholder="Enter your Name"
        value={playerName}
        onChange={(e) => handleChange(e)}
      ></input>
      <button
        onClick={registerFunc}
        className="bg-slate-600 text-white px-2 py-1 rounded-lg"
      >
        Confirm
      </button>
    </div>
  );
};

export default RegisterPlayer;

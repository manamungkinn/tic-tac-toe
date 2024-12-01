import React from "react";

const InputUser = ({ onSubmit, user1, user2 }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="user1">
          User X
          <input required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" name="user1" id="user1" onChange={user1} />
        </label>
        <label htmlFor="user2">
          User O
          <input required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" name="user2" id="user2" onChange={user2} />
        </label>
        <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 mt-2 rounded-lg" type="submit">Simpan</button>
      </form>
    </>
  );
};

export default InputUser;

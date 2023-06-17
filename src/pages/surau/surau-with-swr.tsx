"use client";

import React, { useEffect } from "react";
import { api } from "../../utils/api";

const SurauWithSWR = () => {
  useEffect(() => {
    handleSearchWithSSR();
  }, []);

  const handleSearchWithSSR = (surauName: any) => {
    const data = api.surau.searchSurau.useQuery(surauName);
    console.log(data);
  };

  const { data, error, isLoading } = api.surau.getLatestAddedSurau.useQuery();

  return (
    <div className="container mx-auto mt-4 flex-col items-center justify-center text-xl">
      <div>
        <input
          type="text"
          placeholder="Search for a Surau"
          className="mt-8 w-full rounded-md border border-transparent bg-white py-3 px-2  text-base font-medium text-gray-900 hover:bg-gray-100"
          onChange={(e) => handleSearchWithSSR(e.target.value)}
        />
      </div>
      <div>SurauWithSWR</div>

      <div className="mt-2">
        <div>
          {isLoading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error.message}</div>
          ) : (
            data?.map((surau) => (
              <div className="flex flex-col space-y-2" key={surau.id}>
                <div className="rounded border p-4">
                  <h2>Name: {surau.name}</h2>
                  <p>District: {surau.district.name}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SurauWithSWR;

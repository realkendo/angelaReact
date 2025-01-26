function Entry({num, emoji, name, meaning}){
  return(
    <>
      <dl>
        <div className="bg-white shadow-lg rounded-lg p-4 b-5 w-64 text-center transform transition-transform hover:scale-105 m-5">
        <dt>
          {num+'. '}
          <span className="text-6xl mb-2 block">{emoji}</span>
        </dt>
        <dt>
          <span className="text-xl font-semibold text-gray-800">{name}</span>
        </dt>
        <dd className="text-sm text-gray-600 mt-2">{meaning}</dd>
        </div>
      </dl>
    </>
  )
}


export default Entry;
import { useContext } from 'react';
import HeroCard from './heroCard';
import { HttpHerousContext } from '../providers/httpHeroProvider';

const HeroList = () => {
  const httpCtx = useContext(HttpHerousContext);

  const handleNextPage = () =>
    httpCtx.heroList.info?.next &&
    httpCtx.fetchHeros(httpCtx.heroList.info.next);
  const handlePrevPage = () =>
    httpCtx.heroList.info?.prev &&
    httpCtx.fetchHeros(httpCtx.heroList.info.prev);
  return (
    <div>
      {httpCtx.heroList?.results &&
        httpCtx.heroList.results.map((hero, index) => (
          <HeroCard key={`hero-card-${index}`}>
            {hero.id}
            {hero.name}
          </HeroCard>
        ))}
      <button onClick={handlePrevPage}>prev</button>
      <button onClick={handleNextPage}>next</button>
    </div>
  );
};
export default HeroList;

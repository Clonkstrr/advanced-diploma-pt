import { useParams } from 'react-router-dom';
import { Layout } from './ui/Layout';
import { Home } from './ui/Home';
import { Catalog } from './ui/Catalog';
import { UnitPlayer } from './engine/UnitPlayer';
import { getUnit } from './content/registry';

function UnitRoute() {
  const { courseId = '', unitId = '' } = useParams();
  const found = getUnit(courseId, unitId);
  if (!found?.course) return <p>Unit not found.</p>;
  // Remount the player per unit so its index state can never outlive the unit.
  return <UnitPlayer key={`${courseId}/${unitId}`} course={found.course} unit={found.unit} />;
}

export { Layout, Home, Catalog, UnitRoute };

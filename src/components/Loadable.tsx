import { PropsWithChildren, Suspense } from 'react';

// project import
import Loader from './Loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = ({ children }: PropsWithChildren) => <Suspense fallback={<Loader />}>{children}</Suspense>;

export default Loadable;

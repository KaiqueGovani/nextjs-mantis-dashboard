import config from 'config';
import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect(config.defaultPath);
}

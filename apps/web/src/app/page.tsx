import { encryption } from '@rnqc/encryption';
export default function Index() {
  return (
    <div className="container">
      <p>{encryption()}</p>
    </div>
  );
}

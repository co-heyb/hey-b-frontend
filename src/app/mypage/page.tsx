import InputBar from '@/components/InputBar';
import TiptapEditor from '@/components/TiptapEditor';

export default function Home() {
  return (
    <div>
      <main>
        <InputBar status="error">
          <InputBar.Label>ID</InputBar.Label>
          <InputBar.Input />
          <InputBar.Helper>helper text</InputBar.Helper>
        </InputBar>
        <TiptapEditor />
      </main>
    </div>
  );
}

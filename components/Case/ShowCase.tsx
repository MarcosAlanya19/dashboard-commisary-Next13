import { getCases } from '@/service/case.service';

// eslint-disable-next-line @next/next/no-async-client-component
const ShowCase = async () => {
  const data: CaseEntity[] = await getCases();

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ShowCase;

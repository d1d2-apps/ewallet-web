import { formatISO } from 'date-fns';

import { cleanup, render, userEvent, waitFor } from '@/test/test-utils';

import { ChangeProfilePictureForm } from './ChangeProfilePictureForm';

jest.mock('@/features/auth', () => ({
  ...jest.requireActual('@/features/auth'),
  useAuth: jest.fn().mockReturnValue({
    ...jest.requireActual('@/features/auth').useAuth,
    user: {
      id: 'user-id',
      name: 'John Doe',
      email: 'john@doe.com',
      picture: 'user-picture',
      createdAt: formatISO(new Date()),
      updatedAt: formatISO(new Date())
    }
  })
}));

beforeEach(() => jest.resetModules());

afterEach(() => cleanup());

afterAll(() => jest.clearAllMocks());

test('should be able to upload a profile picture', async () => {
  const mockChangeProfilePictureMutation = jest.fn();

  jest.doMock('../../api/changePicture', () => ({
    useChangeProfilePicture: jest.fn().mockReturnValue({ mutateAsync: mockChangeProfilePictureMutation })
  }));

  const { getByTestId } = await render(<ChangeProfilePictureForm />);

  const fakeProfilePicture = new File(['hello'], 'hello.png', { type: 'image/png' });

  const profilePictureInput = getByTestId('profile-picture-input') as HTMLInputElement;

  await userEvent.upload(profilePictureInput, fakeProfilePicture);

  waitFor(() => expect(profilePictureInput.files?.item(0)).toStrictEqual(fakeProfilePicture));

  waitFor(() =>
    expect(mockChangeProfilePictureMutation).toHaveBeenCalledWith({
      data: { picture: fakeProfilePicture }
    })
  );
});

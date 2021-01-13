export const defaultState = {
  users: [
    {
      id: 'U1',
      name: 'Dev',
    },
    {
      id: 'U2',
      name: 'C. Eeyo',
			// passwordHash: md5("TUPLES")
    },
  ],
  groups: [
    {
      name: 'To Do',
      id: 'G1',
      owner: 'U1',
    },
  ],
  tasks: [
    {
      name: 'Do tests',
      id: 'T1',
      group: 'G2',
      owner: 'U2',
      isComplete: false,
    },
    {
      name: 'Write tests',
      id: 'T2',
      group: 'G1',
      owner: 'U1',
      isComplete: false,
    },
  ],
  comments: [
    {
      owner: 'U1',
      id: 'C1',
      task: 'T1',
      content: 'Great work!!!',
    },
  ],
};

interface IPlaysCounter {
  execute(totalPlays: number | undefined): Promise<void>;
}
export default IPlaysCounter;
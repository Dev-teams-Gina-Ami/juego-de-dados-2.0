interface IWinsCounter {
  execute(totalWins: number | undefined): Promise<void>;
}
export default IWinsCounter;
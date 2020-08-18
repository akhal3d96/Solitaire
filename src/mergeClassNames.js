export default function mergeClassNames (className, ...args) {
  const joinArgs = args.join(' ')
  const finalClassName = className ? joinArgs.concat(' ', className) : joinArgs

  return finalClassName
}

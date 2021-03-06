import { Command, flags } from '@oclif/command'

class Channels extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'file' }]
  console.log('ziobro ty kurwo 2020-08-21')
  async run() {
    const { args, flags } = this.parse(Channels)

    const name = flags.name ?? 'world'
    this.log("siema")
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}

export = Channels

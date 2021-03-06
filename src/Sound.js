import Debug from 'debug'
const debug = Debug('MIDI.js:src/Sound.js')

export default class Sound {
	constructor({channelID, noteID, velocity, startTime}) {
		this.channelID = channelID
		this.noteID = noteID
		this.velocity = velocity
		this.startTime = startTime
		this.isEnding = false
	}

	cancelImmediately() {
		debug('Not implemented!')
	}
}
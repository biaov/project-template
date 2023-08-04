import { Module } from './types'

export default import.meta.glob('./*/index.ts', { eager: true }) as Record<string, Module>

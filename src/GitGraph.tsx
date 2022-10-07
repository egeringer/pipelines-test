/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import './App.css'
import { Gitgraph } from '@gitgraph/react'
// import { Orientation, TemplateName, templateExtend } from '@gitgraph/core'
import { TemplateName, templateExtend, Commit } from '@gitgraph/core'

const GitGraph1 = (): JSX.Element => {
  return (
    <Gitgraph>
      {(gitgraph) => {
        const master = gitgraph.branch('master')
        master.commit('Init the project')
        master
          .commit('Add README')
          .commit('Add tests')
          .commit('Implement feature')
        master.tag('v1.0')
        const newFeature = gitgraph.branch('new-feature')
        newFeature.commit('Implement an awesome feature')
        master.commit('Hotfix a bug')
        newFeature.commit('Fix tests')
        // Merge `newFeature` into `master`
        master.merge(newFeature, 'Release new version')
      }}

    </Gitgraph>
  )
}

// const optionsGral = {
//   template: TemplateName.Metro,
//   orientation: Orientation.VerticalReverse,
//   author: 'Diego <mailto:diego@mail.com>'
// }
const optionsGral = {
  template: templateExtend(TemplateName.Metro,
    {
      colors: ['grey', 'red', 'blue', 'orange', 'magenta', 'green', 'purple']
    }
  ),
  author: 'Diego <mailto:diego@mail.com>'
}
const options1 = {
  author: 'Eze <mailto:eze@mail.com>'
}

const handleClick = (commit: Commit<any>): void => {
  console.log(commit)
  alert(`Commit ${commit.hash} selected`)
}

const GitGraph2 = (): JSX.Element => {
  return (
    <Gitgraph options = {optionsGral}>
      {(gitgraph) => {
        const master = gitgraph.branch('master')
        master.commit('Init the project')
          .commit('Add README')
        // .commit('Add tests')
        // .commit('Implement feature')
        master.tag('v1.0')
        const branch1 = gitgraph.branch('branch1')
        branch1
          .commit({ ...options1, subject: 'Feature1', tag: 'tagb11' })
          .commit({ ...options1, subject: 'Feature2', onMessageClick: (commit) => handleClick(commit) })
        const branch2 = gitgraph.branch({ name: 'branch2', from: master })
        branch2.commit({ ...options1, subject: 'Bug Branch 2' })
        const branch3 = gitgraph.branch('branch3')
        branch3.commit({ subject: 'Bug Branch3' })
        const branch4 = gitgraph.branch({ name: 'branch4', from: branch1 })
        branch4.commit({ ...options1, subject: 'Bug Branch 4', tag: 'tagb41' })
        branch2.commit({ author: 'Fede <mailto:fede@mail.com>', subject: 'New Library' })
        branch1.merge(branch2, 'Fix All')
        branch1.merge(branch3, 'Merge Branch 3 in Branch 1')
        master.commit('Hotfix 1')
        master.tag('v1.1')
        const branch5 = branch2.branch('branch5')
        branch5.commit('commit in branch 5')
        branch2.merge(branch5, '5 to 2')
        branch1.merge(branch2, '2 to 1')
        master.merge(branch1, 'Release new version 2')
        master.tag('v2.0')
        master.commit({ subject: 'Hotfix 2', body: 'Commit Body' })
        master.tag('v2.1')
        master.merge({ branch: branch4, commitOptions: { subject: 'Release new version 3', author: 'Eze <mailto:eze@mail.com>', body: 'Merge Body' } })
        master.tag('v3.0')
      }}
    </Gitgraph>
  )
}

const branchesOrder = [
  'release/0.0.4/Bug/BUG-01', 'release/0.0.4/feature/FEAT-01', 'release/0.0.4/main',
  'release/0.0.2/feature/FEAT-01', 'release/0.0.2/main',
  'main',
  'release/0.0.3/main', 'release/0.0.3/feature/FEAT-01', 'release/0.0.3/Bug/BUG-01', 'release/0.0.3/feature/FEAT-02',
  'release/0.0.5/main', 'release/0.0.5/feature/FEAT-01', 'release/0.0.5/feature/FEAT-02'
]
// const branchesOrder = ['release/0.0.2/', 'main', 'release/0.0.3/']

const compareBranchesOrder = function (a: string, b: string): number {
  return branchesOrder.indexOf(a) - branchesOrder.indexOf(b)
}
const optionsGitGraph = {
  template: templateExtend(TemplateName.Metro,
    {
      colors: ['blue', 'red', 'gray', 'orange', 'magenta', 'green', 'purple'],
      commit: {
        message: {
          displayHash: false
        }
      }
    }
  ),
  compareBranchesOrder,
  author: 'Eze'
}
const GitGraph3 = (): JSX.Element => {
  return (
    <Gitgraph options = {optionsGitGraph}>
      {(gitgraph) => {
        const main = gitgraph.branch('main')
        main.commit('Initial commit')
          .commit('Create React TypeScript App')
          .commit('Add Github actions')
        main.tag('V0.0.1')

        const release002 = gitgraph.branch({ name: 'release/0.0.2/main', from: main })
          .commit({ author: 'Fede', subject: 'Initial commit release 0.0.2' })
        const release002FEAT01 = gitgraph.branch({ name: 'release/0.0.2/feature/FEAT-01', from: release002 })
          .commit({ author: 'Fede', subject: 'Add ESLint plugin' })
        release002.merge({ branch: release002FEAT01, commitOptions: { subject: 'Merged FEAT-01', author: 'Eze' } })
        main.merge({ branch: release002, commitOptions: { subject: 'Merged Release 0.0.2', author: 'Eze' } })
        main.tag('V0.0.2')

        const release003 = gitgraph.branch({ name: 'release/0.0.3/main', from: main })
          .commit({ author: 'Diego <mail>', subject: 'Initial commit release 0.0.3' })
        const release003FEAT01 = gitgraph.branch({ name: 'release/0.0.3/feature/FEAT-01', from: release003 })
          .commit({ author: 'Fede', subject: 'Update App colors' })
        const release003BUG01 = gitgraph.branch({ name: 'release/0.0.3/Bug/BUG-01', from: release003 })
          .commit({ author: 'Fede', subject: 'Fix misspelling' })
        release003.merge({ branch: release003BUG01, commitOptions: { subject: 'Merged BUG-01', author: 'Diego <mail>' } })
        const release003FEAT02 = gitgraph.branch({ name: 'release/0.0.3/feature/FEAT-02', from: release003 })
          .commit({ subject: 'Add README.md' })
        release003.merge({ branch: release003FEAT01, commitOptions: { subject: 'Merged FEAT-01' } })
        release003.merge({ branch: release003FEAT02, commitOptions: { subject: 'Merged FEAT-01', author: 'Eze' } })
        main.merge({ branch: release003, commitOptions: { subject: 'Merged Release 0.0.3' } })
        main.tag('V0.0.3')

        const release004 = gitgraph.branch({ name: 'release/0.0.4/main', from: main })
          .commit({ author: 'Diego <mail>', subject: 'Initial commit release 0.0.4' })
        const release004FEAT01 = gitgraph.branch({ name: 'release/0.0.4/feature/FEAT-01', from: release004 })
          .commit({ author: 'Fede', subject: 'Update App colors' })
        const release005 = gitgraph.branch({ name: 'release/0.0.5/main', from: main })
          .commit({ author: 'Diego <mail>', subject: 'Initial commit release 0.0.5' })
        const release005FEAT01 = gitgraph.branch({ name: 'release/0.0.5/feature/FEAT-01', from: release005 })
          .commit({ author: 'Fede', subject: 'Update App colors' })
        release004.merge({ branch: release004FEAT01, commitOptions: { subject: 'Merged FEAT-01' } })
        const release004BUG01 = gitgraph.branch({ name: 'release/0.0.4/Bug/BUG-01', from: release004 })
          .commit({ author: 'Fede', subject: 'Fix misspelling' })
        const release005FEAT02 = gitgraph.branch({ name: 'release/0.0.5/feature/FEAT-02', from: release005 })
          .commit({ author: 'Fede', subject: 'Update App colors' })
        release005.merge({ branch: release005FEAT02, commitOptions: { subject: 'Merged FEAT-02' } })
        release004.merge({ branch: release004BUG01, commitOptions: { subject: 'Merged BUG-01' } })
        main.merge({ branch: release004, commitOptions: { subject: 'Merged Release 0.0.4' } })
        main.tag('V0.0.4')
        gitgraph.branch({ name: 'release/0.0.6/main', from: main })
          .commit({ author: 'Diego <mail>', subject: 'Initial commit release 0.0.6' })
        release005.merge({ branch: release005FEAT01, commitOptions: { subject: 'Merged FEAT-01' } })
        main.merge({ branch: release005, commitOptions: { subject: 'Merged Release 0.0.5' } })
        main.tag('V0.0.5')
      }}
    </Gitgraph>
  )
}

export { GitGraph1, GitGraph2, GitGraph3 }

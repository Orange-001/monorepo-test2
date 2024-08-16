Pnpm workspace
1、安装工作区最新版本
"@element-plus/components": "^1.0.0"
"@element-plus/components": "workspace:1.0.0"
"@element-plus/components": "npm:@element-plus/components@latest"
2、安装已发布的npm版本
"@element-plus/components": "1.0.0"
3、更换版本时：先remove再重新安装，以清除缓存; 或者pnpm update
4、cli
(1)切换到play目录执行dev命令
pnpm run -C play dev
(2)安装到根目录
pnpm i rollup -w
(3)安装到指定workspace
pnpm i rollup --filter build

Changesets
1、添加变更集工具
pnpm install @changesets/cli && npx changeset init
2、添加变更集
npx changeset
3、消耗所有变更集，并根据这些变更集更新到最合适的 semver 版本。它还为每个使用的变更集写入变更日志条目。
npx changeset version
4、发布
npx changeset publish

Rollup
npx rollup --config rollup.config.ts --configPlugin @rollup/plugin-typescript

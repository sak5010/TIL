# Git 명령어

### Git 초기 유저 설정

```console
$ git config -global user.name "username"
$ git config -global user.email "username@io.com"
$ git config -list # 설정 확인 출력s
```

<br>

### Git 저장소 생성

```console
$ git init
```

<br>

### Staging area로 보내기

```console
$ git add [file.js] # file.js 파일 add
$ git add . # 현재 디렉토리 모든 파일 add
```

<br>

### Commit

```console
$ git commit -m "commit message"
```

<br>

### 저장소 반영 내용 변경

```console
$ git commit --amend -m "edit message"
```

<br>

### 저장소 반영 내역 확인

```console
$ git log
```

<br>

### 파일 상태 확인

```console
$ git status # staging인지 상태 확인
$ git diff # commit된 파일 중 변경 사항 비교
```

<br>

### log 옵션들

`-p 또는 --patch`: 각 commit의 수정 결과를 보여주는 diff와 같은 역할<br>
`-n`: 상위 n개의 commit만 보여줌<br>
`git log --pretty`: 각 commit을 한 줄로 출력
`git log --graph`: commit간의 연결 관계를 아스키 그래프로 출력

<br>

### Branch

```console
$ git branch [like_feature] # branch 생성
$ git branch # 현재 branch들 확인
$ git checkout [like_feature] # branch 전환
$ git branch -d <branch name> # branch 삭제
```

<br>

### Merge

```console
$ git merge like_feature # like_feature를 현재 branch로 병합
```

<br>

### 이전 파일로 되돌아가기

```console
$ git reset --hard [hashcode]
```

<br>

### Git 원격 저장소

```console
$ git clone [원격저장소 주소] # 원격저장소에 있는 git repository 복사
$ git remote add origin [원격저장소 주소] # 현재 repository를 원격 저장소에 연결
$ git remote # 원격저장소들 확인
$ git remote show origin # origin이라는 원격저장소 상세내용 보기
$ git remote rename origin git_test # 원격저장소 이름 변경
$ git remote rm git_test # 원격저장소 삭제
$ git pull # 원격저장소에서 데이터를 가져와 병합
$ git push origin master # 로컬에서 작업한 내용 원격저장소에 반영
$ git remote -v # 저장소의 이름과 주소 함께 보기
```

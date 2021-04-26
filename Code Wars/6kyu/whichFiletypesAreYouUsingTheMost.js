// Which filetypes are you using the most? - 6 kyu

// You've been working with a lot of different file types recently as your interests have broadened.

// But what file types are you using the most? With this question in mind we look at the following problem.

// Given a List/Array of Filenames (strings) files return a List/Array of string(s) contatining the most common extension(s). If there is a tie, return a sorted list of all extensions.

// Important Info:
// Don't forget, you've been working with a lot of different file types, so expect some interesting extensions/file names/lengths in the random tests.
// Filenames and extensions will only contain letters (case sensitive), and numbers.
// If a file has multiple extensions (ie: mysong.mp3.als) only count the the last extension (.als in this case)
// Examples
// files = ['Lakey - Better days.mp3', 
//          'Wheathan - Superlove.wav', 
//          'groovy jam.als', 
//          '#4 final mixdown.als', 
//          'album cover.ps', 
//          'good nights.mp3']
// would return: ['.als', '.mp3'], as both of the extensions appear two times in files.

// files = ['Lakey - Better days.mp3', 
//          'Fisher - Stop it.mp3', 
//          'Fisher - Losing it.mp3', 
//          '#4 final mixdown.als', 
//          'album cover.ps', 
//          'good nights.mp3']
// would return ['.mp3'], because it appears more times then any other extension, and no other extension has an equal amount of appearences.

function solve(files) {
    let storage = {}
    let result = []
    files.forEach(file => {
            if (storage[file.slice(file.lastIndexOf('.'))]) {
                storage[file.slice(file.lastIndexOf('.'))]++
            }else{
                storage[file.slice(file.lastIndexOf('.'))] = 1
            }
    });
    for (key in storage){
        if (result.length === 0 || storage[result[0]] < storage[key]) {
            result = [key]
        }else{
            if (storage[result[0]] === storage[key]) result.push(key)
        }
    }
    return result.sort()
}

console.log(solve(['direful.pr', 'festive.html', 'historical.wav', 'holistic.mp3', 'impossible.jar', 'gentle.cpp', 'gleaming.xml', 'inconclusive.js', 'erect.jar', 'befitting.mp3', 'brief.wp', 'beautiful.jar', 'energetic.pt', 'careful.wp', 'defective.cpp', 'icky.wav', 'gorgeous.txt', 'good.pt', 'fat.pt', 'bored.als', 'adaptable.cpp', 'fumbling.exe', 'grieving.wp', 'efficient.wav', 'fearful.xml', 'damp.html', 'erect.exe', 'annoyed.xml', 'elderly.ala', 'far-flung.txt', 'careful.mp3', 'actually.pt', 'cynical.ala', 'complex.exe', 'extra-small.pt', 'enchanted.ala', 'amazing.html', 'bashful.h', 'hallowed.html', 'entertaining.html', 'bad.js', 'illegal.maya', 'deadpan.html', 'furtive.wp', 'hanging.css', 'drunk.py', 'capricious.wav', 'damaging.Ue4', 'cool.Ue4', 'ambitious.css', 'fortunate.wp', 'electric.mp3', 'crowded.txt', 'cooperative.html', 'graceful.pt', 'aboard.pt', 'exclusive.als', 'glossy.css', 'fluffy.pt', 'cluttered.txt', 'halting.cpp', 'glib.cpp', 'aback.pr', 'cynical.Ue4', 'chilly.xml', 'hideous.ala', 'finicky.txt', 'feigned.ala', 'better.Ue4', 'dear.py', 'available.xml', 'easy.pr', 'fine.mp3', 'cowardly.jar', 'incredible.css', 'adhesive.exe', 'energetic.mp3', 'harmonious.exe', 'general.als', 'condemned.als', 'flawless.als', 'curvy.h', 'ambitious.mp3', 'disillusioned.xml', 'bitter.h', 'hanging.wp', 'certain.cpp', 'flashy.html', 'cuddly.pr', 'cagey.Ue4', 'extra-small.pr', 'amuck.cpp', 'direful.html', 'delightful.als', 'helpless.h', 'foamy.mp3', 'enthusiastic.maya', 'good.maya', 'adhesive.css', 'imperfect.pr', 'bent.cpp', 'exultant.zbrush', 'adorable.mp3', 'clammy.maya', 'gaudy.pt', 'blushing.css', 'cuddly.Ue4', 'curved.py', 'boring.html', 'broken.txt', 'daily.jar', 'giddy.xml', 'curved.css', 'future.maya', 'graceful.css', 'guiltless.maya', 'gentle.cpp', 'few.css', 'calculating.txt', 'clear.pr', 'grey.py', 'entertaining.ala', 'elfin.txt', 'excited.js', 'abject.zbrush', 'best.js', 'boundless.wav', 'hurried.ala', 'delirious.cpp']
      ))
      // => ['.cpp', '.html']
      
console.log(solve(['dramatic.txt', 'incompetent.jar', 'alcoholic.wp', 'clumsy.py', 'abject.h', 'boring.exe', 'aloof.pr', 'familiar.py', 'fanatical.py', 'ill-informed.html', 'fierce.pr', 'accurate.html', 'grotesque.pr', 'brown.py', 'courageous.pt', 'grouchy.jar', 'giant.pt', 'dirty.h', 'abaft.jar', 'enormous.zbrush', 'creepy.cpp', 'beneficial.py', 'absorbing.ala', 'heartbreaking.html', 'exclusive.js', 'fluttering.html', 'happy.als', 'fresh.pr', 'adamant.txt', 'awful.maya', 'frightening.maya', 'bizarre.html', 'efficacious.exe', 'illegal.wav', 'dizzy.js', 'gusty.wp', 'delightful.pt', 'full.als', 'chivalrous.xml', 'filthy.js', 'functional.jar', 'conscious.wav', 'feeble.exe', 'hilarious.cpp', 'earthy.py', 'handy.txt', 'hollow.cpp', 'aggressive.js', 'fat.h', 'drunk.exe', 'clear.h', 'easy.wav', 'eatable.pt', 'grumpy.css', 'empty.exe', 'brief.jar', 'aggressive.txt', 'aggressive.txt', 'gruesome.ala', 'awake.txt', 'apathetic.mp3', 'holistic.pt', 'embarrassed.css', 'flashy.maya', 'exultant.ala', 'exuberant.exe', 'graceful.pt', 'dependent.py', 'gigantic.wp', 'husky.js', 'immense.pr', 'defiant.cpp', 'cooperative.html', 'frantic.maya', 'abashed.css', 'dysfunctional.h', 'gusty.js', 'dynamic.txt', 'dreary.pt', 'giddy.ala', 'exciting.css', 'best.als', 'humdrum.css', 'busy.jar', 'frail.cpp', 'cagey.wav']
      ))
      // => ['.pt', '.py', '.txt']
      
console.log(solve(['freezing.jar', 'frail.xml', 'available.txt', 'excited.als', 'godly.exe', 'fair.zbrush', 'abortive.Ue4', 'ill-fated.mp3', 'early.cpp', 'demonic.py', 'greedy.css', 'high.py', 'dry.xml', 'fascinated.html', 'humorous.zbrush', 'hilarious.pr', 'burly.pt', 'cumbersome.wp', 'elite.Ue4', 'equable.py', 'cold.h', 'discreet.wp', 'hard.mp3', 'aberrant.css', 'common.zbrush', 'fretful.maya', 'erect.js', 'good.maya', 'general.wav', 'complete.js', 'ad hoc.jar', 'healthy.mp3', 'bawdy.exe', 'impartial.py', 'hesitant.pt', 'erratic.css', 'agonizing.cpp', 'belligerent.html', 'cumbersome.Ue4', 'chilly.h', 'bustling.exe', 'curly.jar', 'gorgeous.py', 'friendly.txt', 'discreet.html', 'abhorrent.ala', 'awake.Ue4', 'good.Ue4', 'closed.html', 'gabby.py', 'imminent.js', 'combative.css', 'feigned.ala', 'elderly.ala', 'glamorous.h', 'dry.xml', 'illustrious.html', 'first.xml', 'conscious.xml', 'divergent.zbrush', 'doubtful.xml', 'big.ala', 'brief.h', 'clever.als', 'fierce.ala', 'adventurous.html', 'ashamed.jar', 'fast.cpp', 'fanatical.py', 'ambiguous.pr', 'efficient.txt', 'gullible.jar', 'ill-informed.cpp', 'capable.py', 'aboard.mp3', 'complete.als', 'helpful.maya', 'bizarre.css', 'filthy.js', 'hateful.Ue4', 'aback.wp', 'fertile.html', 'cloudy.als', 'comfortable.css', 'bustling.js', 'ad hoc.py', 'adorable.ala', 'frequent.als', 'flimsy.mp3', 'aboriginal.pt', 'blushing.h', 'feigned.py', 'bloody.py', 'hospitable.ala', 'extra-large.cpp', 'alike.exe', 'fine.js', 'confused.wav', 'bloody.wp', 'cumbersome.wav', 'harsh.mp3', 'crooked.css', 'equal.wav', 'drunk.als', 'general.cpp', 'grieving.css', 'certain.cpp', 'cumbersome.pt', 'different.txt', 'flat.h', 'cagey.h', 'enormous.wp', 'difficult.xml', 'furry.pt', 'enormous.exe', 'dramatic.h', 'brief.zbrush', 'elfin.zbrush', 'cumbersome.pt']
      ))
      // => ['.py']
      
console.log(solve(['fresh.exe', 'groovy.pr', 'debonair.pr', 'hesitant.Ue4', 'curious.py', 'black.als', 'elderly.zbrush', 'harmonious.wav', 'different.cpp', 'ablaze.xml', 'abstracted.html', 'hollow.zbrush', 'familiar.xml', 'defiant.mp3', 'huge.exe', 'efficacious.html', 'aberrant.ala', 'better.js', 'glamorous.wp', 'glossy.cpp', 'gentle.jar', 'incandescent.exe', 'bashful.js', 'aware.pr', 'hellish.js', 'icky.cpp', 'chivalrous.pr', 'exotic.xml', 'grandiose.js', 'abrupt.html', 'bitter.mp3', 'chemical.xml', 'disagreeable.exe', 'far-flung.exe', 'acrid.wp', 'infamous.Ue4', 'hungry.xml', 'deadpan.h', 'equable.wp', 'hanging.txt', 'fanatical.Ue4', 'excellent.Ue4', 'grieving.js', 'brash.css', 'gullible.pr', 'acid.py', 'fragile.html', 'bewildered.jar', 'bored.zbrush', 'illustrious.zbrush', 'equal.cpp', 'female.wp', 'coordinated.cpp', 'elderly.txt']
      ))
      // =>['.cpp', '.exe', '.js', '.pr', '.xml']
      
console.log(solve(['hanging.h', 'fixed.ala', 'first.pr', 'cooperative.cpp', 'elfin.zbrush', 'fair.pr', 'cool.css', 'highfalutin.py', 'alcoholic.maya', 'heady.cpp', 'befitting.wav', 'certain.jar', 'glistening.exe', 'attractive.wav', 'gruesome.wp', 'happy.txt', 'finicky.jar', 'clumsy.js', 'assorted.js', 'highfalutin.cpp', 'damaging.h', 'ethereal.xml', 'great.jar', 'dead.wp', 'acoustic.xml', 'devilish.css', 'curly.pt', 'exuberant.ala', 'flippant.wp', 'holistic.html', 'cut.txt', 'adamant.py', 'dashing.zbrush', 'conscious.wp', 'black-and-white.cpp', 'elated.pt', 'high-pitched.exe', 'flowery.xml', 'glib.wp', 'industrious.html', 'arrogant.zbrush', 'accessible.html', 'classy.jar', 'acceptable.maya', 'cynical.pt', 'erratic.pt', 'earthy.als', 'dramatic.als', 'bite-sized.py', 'ahead.xml', 'giddy.js', 'fortunate.txt', 'early.txt', 'imaginary.wav', 'cute.zbrush', 'graceful.html', 'far-flung.Ue4', 'goofy.exe', 'abundant.mp3', 'ambitious.txt', 'gigantic.jar', 'abashed.xml', 'guiltless.Ue4', 'adventurous.py', 'guarded.jar', 'extra-large.zbrush', 'filthy.h', 'easy.zbrush', 'glorious.als', 'detailed.pr', 'flashy.zbrush', 'breezy.als', 'faithful.py', 'curly.js', 'chief.js', 'concerned.js', 'cumbersome.zbrush', 'ahead.maya', 'berserk.cpp', 'deserted.pt', 'cool.zbrush', 'broken.cpp', 'glossy.pt', 'deep.xml', 'average.wav', 'dangerous.cpp', 'acrid.wav', 'dear.zbrush', 'deeply.pr', 'detailed.cpp', 'friendly.h', 'first.css', 'heady.exe', 'far-flung.als', 'erratic.mp3', 'exciting.pr']
      ))
      // => ['.zbrush']
      
console.log(solve(['crazy.pr', 'black-and-white.als', 'illegal.wav', 'exultant.mp3', 'exotic.jar', 'capricious.pt', 'abundant.ala', 'eatable.zbrush', 'careful.py', 'godly.css', 'clever.txt', 'dusty.maya', 'awesome.zbrush', 'discreet.jar', 'creepy.h', 'fair.pt', 'descriptive.mp3', 'boundless.ala', 'berserk.xml', 'hungry.exe', 'awful.exe']
      ))
      // =>['.ala', '.exe', '.jar', '.mp3', '.pt', '.zbrush']
      
console.log(solve([]))
// => []


let solveThis = 'crime.wav.js,perpetual.pr,quick.py,wacky.xml.h.wp,number.h,dirt.Ue4.xml.h,depend.pt,enchanting.h.txt,entertaining.wav,jelly.cpp,veil.py,hands.exe.wav.wp,milky.zbrush,pet.h,tin.pt.js,icy.ala.maya,use.css.als,beef.html.wp.exe,strip.pr,super.Ue4,coach.pt.Ue4.pr,unbiased.wav.css,jump.Ue4.jar.exe,cycle.h.xml,swing.js.maya,frame.h.js,lopsided.zbrush,snails.jar.Ue4,snakes.zbrush,friction.jar,building.js.py,pest.xml.js.css,jaded.css.ala,cheerful.wp,salty.wp,wasteful.pr.h,nutty.wp.jar.html,rail.xml.html,dashing.mp3.wav,hand.exe.py.als,well-off.html.pt,apathetic.maya.pt,woebegone.h.zbrush.pt,grubby.wav.pr.Ue4,servant.cpp.Ue4,release.pt.py.py,adhesive.cpp,legs.xml.Ue4.py,approve.wav.jar,shave.css,shivering.html,tongue.html.maya,penitent.h,itch.wav.maya,maniacal.pr,occur.txt.xml,scientific.exe.h,dirt.jar.Ue4.h,sweater.cpp.html,battle.Ue4.py,ultra.js.zbrush,rifle.html.pt,special.jar.jar,town.py,gusty.wp,attract.Ue4.zbrush,society.Ue4.zbrush,bomb.maya.wp,husky.py.cpp.mp3,maddening.h.jar.xml,spot.ala,tray.cpp.jar,arrive.wav.css.mp3,grandiose.zbrush.pr.css,kill.maya.Ue4,applaud.h.mp3.h,new.css.pr.pr,numberless.exe,fear.als.cpp,nerve.wav.wp,notice.html.zbrush.cpp,numerous.als.js.js,nimble.pt.wav,quickest.Ue4,last.cpp,jewel.xml.wav.exe,zonked.py.wav.py,paltry.js,tidy.py.cpp.exe,rustic.xml,enchanting.h.exe,purring.mp3,earsplitting.pt.jar.ala,sophisticated.jar,dynamic.xml.wp.mp3,direful.txt,lake.cpp.exe.als,fuel.js.maya,breezy.jar.pr.Ue4,coach.Ue4,growth.mp3.js,search.mp3,delay.maya.exe.h,helpful.wp,film.ala,badge.xml,suffer.cpp.txt'.split(',')

console.log(solve(solveThis))

const solveThis2 = 'berry.html,wide-eyed.xml,wink.ala.js,detect.html.jar.html,apparatus.xml.html.h,sigh.pr.exe.js,airplane.py.zbrush.jar,add.html.als.maya,dad.pt.wav,jewel.ala.html.jar,invincible.Ue4.txt,tap.maya.pt.ala,dog.cpp,berserk.pr,spiky.wp.exe,suppose.h,change.Ue4.maya.als,fair.js,near.h,afford.maya.js,whisper.xml,versed.jar.cpp,snow.h,squeamish.Ue4.txt.txt,trace.xml.pt.pt,tenuous.py,married.txt,dizzy.exe.xml.maya,nine.exe.pr.h,stiff.js,whine.Ue4,inject.Ue4.py,ski.js,women.js,poke.exe.maya.maya,drop.h,offer.wp,change.ala,dead.jar.Ue4,angle.pr.css,well-off.jar.als,telephone.xml.xml.zbrush,swim.txt,smell.txt,advertisement.maya.mp3.wav,fertile.cpp.jar.mp3,tacky.css,bait.als.h.als,melodic.Ue4,peace.pr,drag.als,tacky.jar.exe.exe,massive.pr.css.css,unsightly.jar,scarce.xml.Ue4,stretch.pt.txt.exe,burn.mp3.maya,flat.ala,ladybug.pt,amusing.ala.ala.zbrush,nutty.cpp,frightening.pr,sleepy.ala.mp3,cemetery.zbrush.xml.Ue4,market.h.wp.zbrush,great.exe,government.css.html,efficacious.pt.jar.mp3,toothpaste.pr.als,ugliest.xml.mp3.h,snakes.pr.ala.wav,rabbits.css.txt,ethereal.mp3.maya,coil.exe.xml,pathetic.pt,abrasive.Ue4.h,dolls.exe.Ue4.zbrush,plant.js.maya,demonic.zbrush,gleaming.xml.html,troubled.als,cloistered.Ue4.xml,try.mp3.exe,yummy.pt.exe.ala,analyse.pt.html.py,numberless.css,boat.js.js.js,tip.ala.txt.exe,elastic.h.pr,bike.Ue4.pr,blink.zbrush.html,reflective.jar.maya,unadvised.pr,fix.js.pt,skin.txt.html.css,obeisant.css.js,near.mp3,fine.cpp.cpp,pointless.als.Ue4.h,confuse.ala.xml,room.pr,tawdry.xml,nest.pt,devilish.h.wav.zbrush,pan.html,vanish.maya.wav.cpp,shelter.mp3.js,dogs.wp.pt.py,hole.pr.als.pt,smooth.pt.als,glove.css,decorate.css.py,cough.maya.ala,instrument.wp.xml.wp,relieved.xml.zbrush,unlock.cpp.Ue4.wav,tough.txt.jar,action.py.als,befitting.exe.zbrush,wash.cpp.h,black-and-white.html.xml,list.txt,crook.zbrush.mp3'.split(',')

console.log(solve(solveThis2))
// => ['.h', '.js']